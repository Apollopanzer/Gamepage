<!DOCTYPE html>
<html>
	<head>
	    <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Bootstrap JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    
		<title>Game Page</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>

	<body>
	
        <!-- Navigation -->
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#links" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span> <!-- only appears for screen readers -->
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Simplegames.net</a>
            </div>
        
            <!-- Collect the nav links for toggling -->
            <div class="collapse navbar-collapse" id="links">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="index.html">Home<span class="sr-only">(current)</span></a></li>
                    <li><a href="history.html">History</a></li>
                    <li><a href="contact.html">Contacts</a></li>
                </ul>
        </nav>
        
	<div class = "container">
    	<div class = "jumbotron"> <h1>The Game Page!</h1>
    </div>
         <div class="row">
                <div class="col-sm-6">
                <p> Rock Paper Scissors </p> 
                <label>Type rock, paper or scissors and click the play button:</label><input id='userInput'><br>
                <a onclick ="RPS()" class="btn btn-primary">Click to play</a>
                <p id ='userOutput'></p> 
                <p id ='computerOutput'></p>
                <p id ='rpsOutput'></p>
                </div>
                <div class="col-sm-6">
                <p>Dice game</p>
                
                
                <a onclick="dice()" class="btn btn-primary">Click to play</a>
           <p id ='diceOutput'></p>
           </div>
            </div>
</div>
<script src = 'dice.js'></script>
<script src = 'rps.js'></script>
	</body> 
</html>
