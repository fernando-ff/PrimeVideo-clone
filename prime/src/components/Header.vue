<template>
    <section>
        <header>
            <div class="header--logo">
                <a href="#"><img src="../../../assets/logo-prime.png"></a>
            </div>
            <div class="header--user">
                <div class="header--user--content">
                    <a href="#"><img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"></a>
                    <h4>Usuario</h4>
                </div>
            </div>
            
        </header>
        <nav>
            <div class="header--navbar">
                <ul>
                    <li class="currentlink">
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Séries</a>
                    </li> 
                    <li>
                        <a href="#">Filmes</a>
                    </li>  
                    <li>
                        <a href="#">Infantil</a>
                    </li>
                    <li>
                        <a href="#">Canais</a>
                    </li>

                </ul>
                <div class="header--navbar--search">
                <form>
                    <input type="text" autocomplete="off" required placeholder="Busca" name="search">
                    <button type="submit"><img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"></button>
                </form>
            </div>

            </div>
            
        </nav>
    </section>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>

header{
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 55px;
    background-color: #1a232b;
}

.header--logo{
 
    height: 60px;
}

.header--logo img{
    height: 100%;
}

.header--user--content{
    height: 35px;
    width: 100px;
    display: flex;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
  
    
}
.header--user img{
    height: 35px;
    
}

.header--user h4{
   color: rgb(155, 155, 155);
    
}

.header--user:hover{
   color: rgb(235, 235, 235);
    
}

.header--navbar{
    position: fixed;
    z-index: 99;
    top: 25px;
    left: 185px;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
}

.header--navbar ul{

    list-style-type: none;
}

.header--navbar li{

    display: inline-block;
    padding: 0 5px;

}
.header--navbar a{
    line-height: 24px;
    text-decoration: none;
    color: rgb(207, 203, 203);
    font-size: larger;
    font-weight: 600;
}

.header--navbar a:hover{    
    color: white;
}

.currentlink a{
    color: white;   
    text-decoration: underline;
    text-underline-position: under ;
}

.header--navbar--search{

    margin-right: 180px;
  
}
.header--navbar--search:hover{

   border-left-color: wheat;
  
  
}

.header--navbar--search input[type='text']{
   margin-top: -10px;
   background: transparent;
   font-size: 17px;
   border: 1px solid rgba(129,151,164,.5);
   max-width: 250px;
   height: 40px;
   font-weight: 600;
   padding-left: 35px;
   box-shadow: none;
   pointer-events: all;
   color: white;
}

.header--navbar--search input[type='text']:hover{

   border-color: rgb(141, 141, 141);
  
  
}

.header--navbar--search button {
  z-index: 99;
  float: left;
  margin-top: -15px;
  margin-right: -45px;
  width: 50px;
  padding: 10px;
  height: 50px;
  cursor: pointer;
  background-color: #1a232b;
  font-size: 17px;
  border: none;
 
}

.header--navbar--search img{
  height: 100%;
  width: 100%;
}





</style>