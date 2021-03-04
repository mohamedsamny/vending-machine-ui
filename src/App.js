import './App.css'

import React from 'react'
import ProductComponent from './components/product'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      products: [],
      credit: 0,
      message: ''
    }
  }

  componentDidMount () {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result
          })
        },
        (error) => {
          console.log(error)
        }
      )
  }

  buyProduct (lane) {
    const { products, credit } = this.state
    const product = products[lane]
    const priceInCents = product.price * 100
    if (product.quantity === 0) {
      this.showMessage('Product not available!')
      return
    }

    if (credit < priceInCents) {
      this.showMessage('Insufficient funds')
      return
    }

    this.vendProduct(product, credit)
  }

  vendProduct (product, credit) {
    // call api to vend the product
    const change = credit - (product.price * 100)
    this.showMessage(`Please take your product: ${product.name} and your change is $${change / 100}`)
    this.setState({ credit: 0 })
  }

  showMessage (message) {
    this.setState({ message: message })
  }

  addCredit (amount) {
    const { credit } = this.state
    this.setState({ credit: credit + amount })
  }

  render () {
    const { isLoaded, products, credit, message } = this.state
    return (
      <div className="App">
        <div className="background">
          <div className="container">
            {isLoaded
              ? <div className="row">
                  <div className="col">
                    <div className="row">
                      {products.map((product, index) => {
                        return <ProductComponent key={index} name={product.name} description={product.description} price={product.price} quantity={product.quantity} lane={index + 1}/>
                      })}
                    </div>
                  </div>

                  <div className="col">
                    <div className="row mb-2 mt-2">
                      <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={() => this.addCredit(100)}>$1.00</button>
                        <button type="button" className="btn btn-outline-primary" onClick={() => this.addCredit(25)}>25¢</button>
                        <button type="button" className="btn btn-outline-primary" onClick={() => this.addCredit(10)}>10¢</button>
                        <button type="button" className="btn btn-outline-primary" onClick={() => this.addCredit(5)}>5¢</button>

                      </div>
                    </div>
                    <div className="row mb-2 mx-4">
                      <input type="text" placeholder="display" value={credit / 100} readOnly={true}/>
                    </div>
                    <div className="row mx-2 mb-2">
                      {products.map((product, index) => {
                        return <button type="button" className="btn btn-outline-primary col-4" onClick={() => this.buyProduct(index)} key={index}>{index + 1}</button>
                      })}
                    </div>
                    {message ? <div className="row mx-2 mt-3 box"><p className="text-center">{message}</p></div> : ''}
                  </div>
                </div>
              : <div className="white-text">Loading</div>}
          </div>
        </div>
      </div>
    )
  }
}

export default App
