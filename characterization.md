# Online Shop
an online store for fast purchases

# Specifications
- Modules
- Structures
- mock ups
- flows

 ## Modules/Models
 - Navbar
 - Product
 - Cart
 - Payment
 - Cart Line
 - Category

 ## Specifications of a Model

 ### Product
 product template for the list of products
 - id : number
 - imgURL : string
 - name : string
 - description : string
 - Price : float
 - categoryId : number

 ### Cart
 container for sotring chosen products
 - id : number
 - totalPrice : float
 - cartLines : [CartLine]*

 ### CartLine
 displaying chosen product, inside the cart
 - id : number
 - Product : ProductReference
 - quantity : number
 - totalPrice : float

 ### Payments
 - id : number
 - cartId : number
 - Address : string
 - CardNumber : number/string
 - EXPDate : number
 - CVV : number

 ### Payment Models
 methods of payment, different forms of payments
 - id : number
 - name : string

 ### Category
 - id : number
 - name : string



# Flow1
 ## onload:
  1. HTTPRequest - GET { products, categories, cart, cartlines }
  2. Presentation:
   21. display Navbar
   22. display cart
   23. display products

# Flow2
 ## onclick:
  ### ProductList
  1. image of a product ~ open the image on modal box
  2. description ~ opens the description to see more
  3. add ~ adding one product to the cart, opens plus and minus to change amount
  4. if product on the cartline, display remove button
  
  ### Cart
  1. order ~ opens box modal of payments

  ### CartLine
  1. remove ~ deletes the product (all the quantity) from the cartlist
  2. add/substract
  3. click ~ open the product in a box modal


TODO: add sorting by Category (arranged by id)
