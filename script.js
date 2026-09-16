 async function FetchData() {

    let customer = [] ;
//    let product = []  ;
//     let order = [] ;

    const customers = await fetch("./data/customers.json") ;
    // const orders = await fetch("./data/orders.json") ;
    // const products = await fetch("./data/products.json");

    //  console.log(customers);
  
    const customerResp = await customers.json() ;
    // const orderResp = await orders.json() ;
    // const productResp = await products.json() ;
   

    console.log(customerResp);



    return customerResp ; 

    
 }




 const customersContainer = document.querySelector('#customer-infos');
const customerInfos = document.querySelector('#customer-all')
 

customerInfos.innerHTML = `<td class="loading-state">loading the infos..</td>`;


 customer =  FetchData();

   console.log(customer);
FetchData();
console.log("hello");


  customer.array.forEach( user => {
   return `
     
        <th>${user.id}</th>
          <th>${user.fullname}</th>
            <th>${user.city}</th>
        <th>${user.segment}</th>
   
   
   `
   console.log(user.id);
   
  });






//    let htmlContent = '';

//         customerResp.forEach(customer => {
//             htmlContent += `<li>${customer.id}</li>`;

//         });

