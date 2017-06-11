$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['message'];
mail("akshatanurag1998@gmail.com","Tremor","Name: $name \n\n Email: $email \n\n Phone: $phone \n\n Message: $message \n\n");
echo "Thank You, We will get back to you ASAP!";
