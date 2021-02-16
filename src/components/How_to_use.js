import React from 'react'
import { Link } from 'react-router-dom'
const How_to_use = () => (
  <div style={{margin: "auto",paddingTop:"3em"}}>
   <center>
    <h2 style={{width:"70%",paddingBottom:"1em"}}>Steps to use Application</h2>
  <p style={{margin: "auto",padding:"30px",width:"70%",textAlign:"left",backgroundColor:"#bff2ec",borderRadius: "25px"}}>
  <h3 style={{textAlign:"left"}}>Download Metamask</h3>
  Metamask is a cryptocurrency wallet which can be used on the Chrome, Firefox and Brave browsers. 
  It's also a browser extension.This means that it works like a bridge between normal browsers and the Ethereum blockchain network.
  It helps to communicate with our Smart Contract.
  <h5 style={{textAlign:"left",padding:"5px"}}>Steps to set Metamask:</h5>
   > Go to the MetaMask homepage &nbsp;
 <a  href="https://metamask.io/">MetaMask Download</a>
 &nbsp;and add the extension for whichever browser you’re using.<br/>
  > A Metamask icon will appear in your browser. Click on the fox icon to open the MetaMask.<br/>
  > There is Main network and in addition there are different netork to test our application. So, here we are using Rinkeby network. 
  Rinkeby is a public testnet for Ethereum that uses PoA (Proof of Authority)
  <br/>
  >In Metamask create new Password.<br/>
  >You’ll now be shown your 12 seed phrases. 
  Write these down and keep them somewhere safe. This is extremely important!<br/>
  >Now, using the metamask test-network is easy, select the Rinkeby network and then select the right-top corner button and create a new account. 
  <br/>
  >After creating Rinkeby account, select and copy the public address of account because we need to add some faucets (i.e ethers) in the account.
  <br/>
  >Faucets can be transafered freely to Rinkeby account using this address:
  &nbsp;
 <a  href=" https://faucet.rinkeby.io/">Faucet access link</a> &nbsp;
 <br/>
 > Visit this website and follow the instructions at the bottom to get faucets in the account.
 <h2 style={{textAlign:"left",padding:"5px"}}>How to use Application</h2>
 {/* <Link to='/Home'>     </Link> */}
 <h5 style={{textAlign:"left",padding:"5px"}}>Seller Front-End</h5>
 

 >Seller form can actually list their product for sale on the blockchain.<br/>
 >Seller post the product, for the buyer to purchase it using ethers.
 
 {/* <Link to='/Home'>  </Link> */}
 <h5 style={{textAlign:"left",padding:"5px"}}>Buyer Front-End </h5>
    

 >Buyer consist of all the products listed by seller<br/>
 >Buyer can purchase the products using ethers they have in their account.
 <h2 style={{textAlign:"left",padding:"5px"}}>How to Application works:</h2>
 For example, consider function as task when it is completed user has to pay some cost in form of ethers. A blockchain is a globally shared, transactional database. This means that everyone can read entries in the database just by participating in the network. Each transaction is provided with transaction hash and block number, they help to keep track of transactions and provide secure transaction between two parties. 
<br/>•	First, we fetch the product from the mappings and also allow seller to post and create a new copy of it in memory.
Initially, seller and buyer account have 100 ethers each, when seller post the advertise, 0.003536 ether are deduced from the sellers account (i.e. the processing fee). 
<br/>•	Then we store the current owner to a variable.
 We will transfer the ownership of the product inside this function, so we need to know who the original owner was. 
 For example, owner details are included with the car details (i.e. public address of seller and once the product is purchased the public address of buyer is displayed).
 <br/>
 •	Next, we add a few requirements. We check for a valid id, that there is enough Ethereum cryptocurrency in the transaction, that the buyer is not the seller, and that the product has not been purchased already.
Make sure the seller and buyer are different because the ownership of vintage car is changed accordingly.<br/>
•	Then we facilitate the transaction. We transfer the ownership to the buyer, mark the product as purchased, and add the product back to the mapping. After this, we send the cryptocurrency payment to the seller.
<h2 style={{textAlign:"left",padding:"5px"}}>Example</h2>

Suppose the buyer wants to buy the mustang which costs 50 Ethers, buyer must have enough ether to buy the car. Once it is verified, Buyer sends request to buy and validation is done.<br/>
<b>
1)	When buyer request to buy car, buyer has to confirm the request and request include the gas fee (i.e. the fee required to perform the transaction and actual cost of car)
<br/>
2)	After the confirmation from buyer side, contract interaction details are obtained which includes public address of smart contract and user,
 total amount, gas limit and gas used, time of transaction and total cost.
 <br/>
 3)	After the transaction, seller account is transferred the amount of purchase (i.e. 50 Ether) and buyers account is updated as well.
<br/>
</b>
  </p>
  <p style={{paddingBottom:"1em"}}></p>
    </center>
    </div>
)

export default How_to_use
