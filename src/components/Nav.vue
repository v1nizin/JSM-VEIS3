<script>
export default {}
</script>


<template>

  <div class="page">
    <header tabindex="0"><h1>JS Móveis</h1></header>
    <div id="nav-container">
      <div class="bg"></div>
      <div class="button" tabindex="0">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
      <div id="nav-content" tabindex="0">
        <ul class="nav-principal">
          <RouterLink to="/"
            ><li><a href="#0">Cadastrar Movéis</a></li>
          </RouterLink>
          <RouterLink to="/Produtos">
            <li><a href="#0">Produtos Cadastrados</a></li>
          </RouterLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:400,600');

* {
  outline: none;
  z-index: 100;
}

#nav-container .bg {
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100% - 70px);
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  z-index: 99; /* Ajuste conforme necessário, um valor menor que o z-index da .page */
}

#social-container {
  display: flex;
  flex-direction: row;
  
}
strong {
  font-weight: 600;

}

.page {
  height: 15vh;
  font-family: 'Encode Sans Condensed', sans-serif;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #212121;
  margin-right: 1000vh;
  position: relative;
  z-index: 100;
}

header {
  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;
  background: #df7d0c;
  color: #fff;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
 
}

main {
  padding: 70px 20px 0;
  display: flex;
  flex-direction: column;
  height: 100%;

}

main > div {
  margin: auto;
  max-width: 600px;

}

main h2 span {
  color: #bf7497;

}

main p {
  line-height: 1.5;
  font-weight: 200;
  margin: 20px 0;

}

main small {
  font-weight: 300;
  color: #888;
  
}

#nav-container {
  position: fixed;
  height: 100vh;
  width: 100%;
  pointer-events: none;

}
#nav-container .bg {
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100% - 70px);
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;


}
#nav-container:focus-within .bg {
  visibility: visible;
  opacity: 0.6;
 
}
#nav-container * {
  visibility: visible;

}

.button {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  border: 0;
  background: transparent;
  border-radius: 0;
  height: 70px;
  width: 30px;
  cursor: pointer;
  pointer-events: auto;
  margin-left: 25px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  
}
.icon-bar {
  display: block;
  width: 100%;
  height: 3px;
  background: #ffffff;
  transition: 0.3s;
  
}
.icon-bar + .icon-bar {
  margin-top: 5px;
  
}

#nav-container:focus-within .button {
  pointer-events: none;
  
}
#nav-container:focus-within .icon-bar:nth-of-type(1) {
  transform: translate3d(0, 8px, 0) rotate(45deg);
}
#nav-container:focus-within .icon-bar:nth-of-type(2) {
  opacity: 0;
}
#nav-container:focus-within .icon-bar:nth-of-type(3) {
  transform: translate3d(0, -8px, 0) rotate(-45deg);
}

#nav-content {
    /* margin-top: 70px; */
    padding: 20px;
    width: 90%;
    max-width: 300px;
    /* position: absolute; */
    top: 0;
    display: flex;
    z-index: 1000;
    left: 0;
    height: calc(100vh - 70px);
    background: #ececec;
    pointer-events: auto;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transform: translateX(-100%); 
    transition: transform 0.3s;
    will-change: transform;
    contain: paint;
    flex-direction: column;
}

#nav-content .nav-principal {
  height: 100%;
  display: flex;
  flex-direction: column;
  
}

#nav-content li a {
  padding: 10px 5px;
  display: block;
  text-transform: uppercase;
  transition: color 0.1s;
  
}

#nav-content li a:hover {
  color: #bf7497;
  
}

#nav-content li:not(.small) + .small {
  margin-top: auto;
  z-index: 100;
}

.small {
  display: flex;
  align-self: center;
  z-index: 100;
}

.small a {
  font-size: 12px;
  font-weight: 400;
  color: #888;
  z-index: 100;
}
.small a + a {
  margin-left: 15px;
  z-index: 100;
}

#nav-container:focus-within #nav-content {
  transform: none;
  z-index: 1000;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

a,
a:visited,
a:focus,
a:active,
a:link {
  text-decoration: none;
  outline: 0;
}

a {
  color: currentColor;
  transition: 0.2s ease-in-out;
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

ul {
  padding: 0;
  list-style: none;
}
</style>