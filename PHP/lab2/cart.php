<?php
$productFile = fopen("products.json", "r");
$productFile_content = fread($productFile, filesize("products.json"));
$products = json_decode($productFile_content, true);
fclose($productFile);

$cartFile = fopen("cart.json", "r");
$cartFile_content = fread($cartFile, filesize("cart.json"));
$cart_products = json_decode($cartFile_content, true);
// print_r($cart_products);
fclose($cartFile);

$ids = array_map(function ($product) {
    return $product['id'];
}, $cart_products);

$products_card = array_filter($products, function ($product) use ($ids) {
    return in_array($product['id'], $ids);
});


// $product_card[0]["quantity"]=5;

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
                <?php foreach ($products_card as $product) { ?>
                    <tr>
                        <td class="col-lg-2"><?= $product['title'] ?></td>
                        <td class="col-lg-4"> <img src="data:image/png;base64,<?= $product['image'] ?>" class="img-fluid" alt="image">
                        </td>
                        <td class="col-lg-3"><?= $product['price'] ?></td>
                        <td class="col-lg-3"><?= $product['id'] ?> </td>

                    </tr>
                <?php } ?>
            </tbody>
        </table>

    </section>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>