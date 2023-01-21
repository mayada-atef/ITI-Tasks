<?php
$cartProducts=[];
function getCartProducts(){
    $db = 'mysql:host=localhost;dbname=ecommerce';
    $con = new PDO($db, 'root', '');
    $query = "SELECT products.id, `name`,`image`,`price`,addtocard.quantity 
        FROM `products` ,`addtocard`
        WHERE products.id=addtocard.product_id;";
    $sql = $con->prepare($query);
    $sql->execute();
    $cartProducts = $sql->fetchAll(PDO::FETCH_ASSOC);
    return $cartProducts;
}
function updateCartbyId($quantity,$id){
    $db = 'mysql:host=localhost;dbname=ecommerce';
    $con = new PDO($db, 'root', '');
    $query = "UPDATE addtocard SET `quantity`=$quantity WHERE `product_id`=$id;";
    $sql = $con->prepare($query);
    $sql->execute();
}

if (isset($_REQUEST["productid"])) {
    $cartProducts= getCartProducts();
    foreach ($cartProducts as $product) {
        if ($product['id'] == $_REQUEST["productid"]) {
            $quantity = $product["quantity"];
        }
    }
    if ($_REQUEST["op"] == "plus") {
        $quantity++;
    } else {
        if ($quantity == 1) {
            $quantity = 1;
        } else {
            $quantity--;
        }
    }
   
    updateCartbyId($quantity, $_REQUEST["productid"]);
}
$cartProducts=getCartProducts();







?>


<!doctype html>
<html lang="en">

<head>
    <title>my cart</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-sm navbar-light bg-light px-5">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./addproduct.html">add product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">mycart</a>
                </li>

            </ul>
        </div>
    </nav>
    <section class="px-5">
        <table class="table">

            <tbody>
                <?php foreach ($cartProducts as $product) { 
                     $totalPrice= $product['quantity']* $product['price'];
                    ?>
                    <tr>
                        <td class="col-lg-2"><?= $product['name'] ?></td>
                        <td class="col-lg-4"> <img src="./images/<?= $product['image'] ?>" class="img-fluid" alt="image">
                        </td>
                        <td class="col-lg-3"><?= $totalPrice ?></td>
                        <td class="col-lg-3">
                            <a href="cart.php?productid=<?= $product['id'] ?>&op=plus" class="btn btn-success mx-1" id="addquantity">+</a>
                            <span class="h5"><?= $product['quantity'] ?></span>
                            <a href="cart.php?productid=<?= $product['id'] ?>&op=minus" class="btn btn-danger mx-1" id="minusquantity">-</a>
                        </td>

                    </tr>
                <?php } ?>
            </tbody>
        </table>

    </section>
    <script>
        var plusQ = document.getElementById("addquantity");
        var minusQ = document.getElementById("minusquantity");
        console.log(plusQ, minusQ);
        plusQ.addEventListener("click", addQuantity);

        function addQuantity(e) {
         console.log("add");
        }
    </script>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>