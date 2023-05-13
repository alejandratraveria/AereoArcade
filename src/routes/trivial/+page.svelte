<script>
    let points = 0;
</script>


<div class="container">    
    <div class="menu">
        <ul>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><img class="logo" src="Logo_Vueling.png"/></li>
            <li><b>Points:</b></li>
            <li>{points}</li>
            <li class="rigthb"><a class="mbutton" href="/">Back</a></li>
        </ul>
    </div>

    <div class="question">
        ¿Cual es la capital de España?
    </div>

    <ul>
        <!-- svelte-ignore a11y-missing-attribute -->
        <li>
            <button on:click={() => points -= 100}>
                Lisboa
            </button>
        </li>
        <li>
            <button on:click={() => points -= 100}>
                Barcelona
            </button>
        </li>
        <li>
            <button on:click={() => points -= 100}>
                Estocolmo
            </button>
        </li>
        <li>
            <button on:click={() => points += 200}>
                Madrid
            </button>
        </li>
    </ul>
</div>


<style>
    *{
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
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
    .question {
        font-size: XXX-large;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }
    .mbutton{
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;

        text-decoration: none;
        color: initial;
    }
</style>