<?php
            require('./connection.php');
            $query = "SELECT * FROM products;";
            $qprepare = $con->prepare($query);
            $qprepare->execute();
            $products = $qprepare->fetchAll(PDO::FETCH_ASSOC);
?>
<!doctype html>
<html lang="en">

<head>
    <title> index lab3 </title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>

    <nav class="navbar navbar-expand-sm navbar-light bg-light px-5">
        <a class="navbar-brand" href="#">lab3 </a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./addproduct.html">add product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./cart.php">mycart</a>
                </li>

            </ul>
        </div>
    </nav>
    <section id="products" class="px-5">
        <div class="row">
            <?php foreach ($products as $product) { ?>
                <div class="col-md-6 col-lg-3">
                    <div class="card">
                        <img src="./images/<?= $product['image']?>" class="card-img-top" alt="image">
                        <div class="card-body">
                            <h5 class="card-title"><?= $product['name'] ?></h5>
                            <p class="card-text"><?= $product['description'] ?></p>
                            <h6 class="card-title"><?= $product['price'] ?></h5>
                                <a href="addtocart.php?id=<?= $product['id'] ?>" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>


    </section>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>