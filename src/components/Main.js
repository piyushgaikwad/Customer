import React, { Component } from 'react';
import image from  './Images/undraw_Vehicle_sale_a645.svg';
import image1 from  './Images/buy.svg';
import  "./App.css"


class Main extends Component {

  render() {
    return (
      <div id="content" >
            
        <div style={ {marginTop:"5em",marginLeft:"13em",padding:"10px",display: "block",textAlign:'center'}}>
        <center>

       <div style={{background:"#cdedf7", padding:"10px",borderRadius:"10px",margin:"auto",marginLeft:" auto",
    marginiRght:" auto"}} >
        <img src={image} height="280px" width="450px"/>
        <h2>SELL PRODUCT</h2>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          this.props.createProduct(name, price)
        }}>
          <div className="form-group">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Product Name"
              style={{width: "70%",padding: "12px 20px",margin:" 8px 0"}}
              required />
          </div>

          <div className="form-group">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Product Price"
              style={{width: "70%",padding: "12px 20px",margin:" 8px 0"}}
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>   
        <p>&nbsp;</p>  
        
</div>
          <p>&nbsp;</p>   <p>&nbsp;</p> 

       <div style={{background:"#f7f5d5", padding:"10px",borderRadius:"10px"}} >      
       <h2>BUY PRODUCT</h2>
        <img src={image1} height="250px" width="400px"/>
       
        <table className="table">
        <center>
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.owner}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }
                          }
                          className="btn btn-primary"
                        >
                          Buy
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
          </center>
        </table>
        </div>
         <p style={{paddingBottom:"20px"}}></p>
        </center>
        </div>
      </div>
    );
  }
}

export default Main;
