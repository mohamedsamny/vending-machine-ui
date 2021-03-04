import './index.css'
import React from 'react'
import PropTypes from 'prop-types'

class ProductComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  refill () {
    fetch(`http://localhost:3000/api/products/${this.props.id}/refill`, { method: 'post' })
      .then(res => res.json())
      .then(
        (result) => {
          this.props.updateProducts(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render () {
    return (
      <div className="col-4 box">
        <div className="row">
          <div className="col-6">Name:</div>
          <div className="col-6">{this.props.name}</div>
        </div>
        <div className="row">
          <div className="col-6">Quantity:</div>
          <div className="col-6">{this.props.quantity} {this.props.isAdmin ? <a onClick={() => this.refill()} href="#">+</a> : ''}</div>
        </div>
        <div className="row">
          <div className="col-6">Lane:</div>
          <div className="col-6">{this.props.lane}</div>
        </div>
        <div className="row">
          <div className="col-6">Price:</div>
          <div className="col-6">{this.props.price}</div>
        </div>
        <div className="row">
          <div className="col-6">Description</div>
          <div className="col-6">{this.props.description}</div>
        </div>
      </div>
    )
  }
}

ProductComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  lane: PropTypes.number.isRequired,
  updateProducts: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired
}
export default ProductComponent
