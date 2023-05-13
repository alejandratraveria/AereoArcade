<script>
	let count = 0;
	
	function handleClick() {
		count += 1;
	}
</script>


<div class="container">    
    <div class="menu">
        <ul>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><img class=logo src="Logo_Vueling.png"/></li>
            <li><b>Points: </b></li>
            <li>a</li>
            <li class="rigthb"><a class="mbutton" href="/">Back</a></li>
        </ul>
    </div>
</div>


<style>


    
    *{
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }

    .container {
        width: 100%;
        height: 100%;
    }

    .menu ul{
        display: inline-flex;
        margin: 50px;
    }

    .menu ul li{
        list-style: none;
        margin: 0 25px;
        color: rgb(22, 22, 22);
        font-size: 20px;
    }

    .logo {
        width: 100px;
    }
    
    .rigthb{
        padding-left: 900px;
    }

    .mbutton{
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;

        text-decoration: none;
        color: initial;
    }

</style>