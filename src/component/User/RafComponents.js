useEffect(async () => {
    try {

      await axios.get(`http://localhost:5000/api/users/profile`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth')
        }
      }).then(async (responseok) => {


        console.log(responseok.data[0].cart, "yeap")

        if (responseok) {
          setC(responseok.data[0].cart)

        }

        // console.log(data2, 'profile asche')




      }).catch(err => {
        this.setState({ mesg: err.response.data.message, loding: false })
        this.notify();
        console.log(err)
      })

    }
    catch (err) {

      console.log(err)

    }

  }, []);



  let arr = []
  for (var key in cdata) {
    var obj = cdata[key].quantity;
    arr.push(obj)

  }
  const sum = arr.reduce((a, b) => a + b, 0);


  const cartSet = (data) => {
    setC(data)




  }

  // console.log(cdata, "zooooo")

  let ff = [...cdata]

  let cartId = ff.map(e => e.id)

  // console.log(cartId, "here")


  useEffect(async () => {
    if (cartId.length) {
      await axios.get(`http://localhost:5000/api/product/products_by_id?id=${cartId}&type=array`)
        .then(response => {
          console.log(response.data, "response")
          setD(response.data)

          console.log(responseok.data[0].cart, "yeappppppppp")

          //Make CartDetail inside Redux Store 
          // We need to add quantity data to Product Information that come from Product Collection. 
          // let totalproduct = 0;
          // let price = 0;

          // console.log(cdata[0].cart,"oiiiii")

          // cdata[0].cart.forEach(cartItem => {
          //   response.data.forEach((productDetail, i) => {
          //     if (cartItem.id === productDetail._id) {
          //       response.data[i].quantity = cartItem.quantity;
          //       totalproduct += parseInt(cartItem.quantity)
          //       price += parseInt(productDetail.price) * parseInt(cartItem.quantity)

          //       console.log(price,"price")

          //     }
          //   })
          // })
          // this.setState({ addtocart: totalproduct, cart: response.data, totalprice: price })

          // console.log(totalproduct)
        }).catch(err => {
          // this.componentDidMount()
          console.log(err)
          // this.setState({ addtocart: 0, cart: [], totalprice: 0 })
        })

    } else {
      // this.setState({ addtocart: 0, cart: [], totalprice: 0 })
    }


  }, []);