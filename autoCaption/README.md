# Auto Image Caption (jQuery Plugin)
----------------------

A simple plugin to add caption to images. Just select all the images tag
and initialize the plugins. if no image container is given by default 
the plugin wraps the image in a **<div class="captioned-image">**
and dynamically inject a **span** with class name **caption**.
It uses the **title** attribute of image tag and use it as caption for the image.

### How to use the plugin
--------------------------

``` javascript
	$(allImgTag).autoImageCaption();
```

#### Default Html Structure created without any options

``` html
	<div class="captioned-image">
	  <!-- you image tag  -->
	  <img src="image_url" alt="La Jolla coastline" title="your image title">
	  <span class="caption"></span>
    </div>

```

#### Options 

**Options** | **Value**
	--- 	|	 --- 
  bgColor   |   image container background color code 
  color     |   caption color code 
  wrapper   |   {'tag' : HTML Element (ex: div, figure), 'class': 'class name of the whole img container' }
  caption   | {'tag' : HTML Element (ex: span, figcaption), 'class': 'class name of the img caption container' }

  #### Example With options

  ``` javascript
  		$('img')
    		.autoImageCaption({
      			'wrapper' : {
        			'tag' : 'figure',
       			    'class': 'myCustomWrapperClass'
      			},
      			'caption' : {
        			'tag' : 'figcaption',
        			'class': 'myCustomCaptionClass'
      			},
      			bgColor: 'yellow',
      			color: 'black'
    	});
  ```

  **Layout generated**
  ----------------------
  ```html
  		<figure class="myCustomWrapperClass" style="background-color: yellow;">
  			<img src="my_img_src" alt="my image" title="My caption">
  			<figcaption class="myCustomCaptionClass" style="color: black;">My caption</figcaption>
		</figure>
  ```