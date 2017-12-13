# My Hero plugin
Demo:[https://htmlpreview.github.io/?https://github.com/katya-voitko/Katya_MyHero/blob/firstBrunch/dist/index.html]

### How to use:
 ``` 
      <header class="myHero">
        <div data-color1="#4b6cb7" data-color2="#182848" data-direction="45deg" data-opacity="0.6" class="overlay"></div>
        <div data-url="http:..." class="myHero__background ">
          <div class="myHero_titles">
            <h1 class="myHero__title titleStyle">My Hero</h1>
            <h2 class="myHero__subtitle subtitleStyle">your favourite plugin</h2>
          </div>
        </div>

      </header>
```
<u>place your image into <div class="myHero__background"></u>

-  data-url: to place the link example:  ``` data-url="http://ozon4life.com/data/out/63/image-159575164.jpg"  ```
- data-image: to fill in the name of your image file  example:  ``` data-image="MyHero.jpg"  ```

<u>Adding gredient to your overlay:</u>

Customise your gredient by choosing the colours:
- data-color1: for the first colour. example:  ``` data-color1="#4b6cb7"  ```
- data-color2 for the second colour. example:  ``` data-color2="#182848"  ```

Add direction:

- data-direction to set the direction of your gredient(can be set in deg or left-top-bottom-right. example:  ```-data-direction="45deg" ```
- data-opacity to change the opacity(range between 0.1 and 0.9). example:  ```data-opacity="0.6"  ```


<u>if you don't want to use an overlay add class noOverlay to <div class="overlay"></u>

