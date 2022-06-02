import Script from "next/script"
//const express = require('express');

const Home = () => {
  return (
    <>
      <Script src="fabric.js" />
      <meta charSet="utf-8" />
      <title>BNP</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" type="text/css" href="style.css" />
      <div className="container-fluid header-container">
        <header>
          <img src="img/header.png" width="100%" />
        </header>
      </div>
      <div className="container-fluid canva-top">
        <div className="row">
          <div className="form-group pop_option text1">
            <span className="close">x</span>
            <img src="img/template-i.png" />
          </div>
          <div className="form-group pop_option text">
            <span className="close">x</span>
            <label htmlFor="exampleInputEmail1">Add Text to Canvas</label>
            <input type="text" className="add-text form-control" /> <br />
            <button className="add-text-btn btn btn-info">Add Text</button>
            {/*<button class="save-btn btn btn-success">Save</button>*/}
<<<<<<< HEAD
            <div className="col-md-12">
<label className="form-label">Select Font</label>
<select className="form-control"  name="font" id="font">
<option value=""></option>
<option value="Arial">Arial</option>
<option value="Times New Roman">Times New Roman</option>
<option value="Century Gothic">Century Gothic</option>
<option value="Agency FB">Agency FB</option>
</select>
</div>
=======
>>>>>>> 6b2ba52131787109ceb77db43a9a636415ba3e03
          </div>
          <div className="form-group pop_option shape">
<span className="close">x</span>
<span className="rectangle"><img src="img/rectangle.png"/></span>
<span className="circle"><img src="img/circle.png"/></span>
<span className="triangle"><img src="img/triangle.png"/></span>
<span className="polygon"><img src="img/polygon.png"/></span>

</div>	
<div className="form-group pop_option clipart">
<span className="close">x</span>
<span className="img1 clipart_img"><img src="http://fabricjs.com/assets/pug_small.jpg"/></span>
</div>
<div className="form-group pop_option background">
<span className="close">x</span>
<span className="bg_img"><img src="http://fabricjs.com/assets/pug_small.jpg"/></span>
<span className="bg_img"><img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"/></span>
</div>
          <div className="form-group pop_option img">
            <span className="close">x</span>
            <label htmlFor="exampleInputEmail1">Upload Image to Canvas</label>
            <br />
            <input type="file" id="file" className="form-control" />
            {/*<button class="save-btn btn btn-success">Save</button>*/}
          </div>
          <div className="col-md-1 left_icons">
            <span className="click_template">
              <img src="img/template.jpg" />
            </span>
            <span className="click_text">
              <img src="img/text.jpg" />
            </span>
            <span className="click_bg"><img src="img/background.jpg"/></span>
            <span className="click_shape">
              <img src="img/shapes.jpg" />
            </span>
            <span className="click_clipart">
              <img src="img/clipart.jpg" />
            </span>
            <span className="click_img">
              <img src="img/uploads.jpg" />
            </span>
            {/* <span>
              <img src="img/design-comments.jpg" />
            </span>
            <span>
              <img src="img/quick-help.jpg" />
            </span>
            <span>
              <img src="img/layers.jpg" />
            </span>
  */}
          </div>
          <div className="col-md-11 canvas_main">
            <canvas id="canvas" width={500} height={300} />
            <a href="" id="txt" target="_blank" />
            <br />
            <img id="preview" />
            <div className="zoom">
              <img src="img/zoom.png" />
            </div>
          </div>
          <div className="right_section">
          <div className="row">
          <div className="col-md-12">
            
            <div className="form-group">
              <label htmlFor="Size">Size</label>
              <br />
              <select name="size" id="size">
                <option value="size1">3x2</option>
                <option value="size2">2x3</option>
                <option value="size3">2x4</option>
              </select>
              <select name="size" id="size">
                <option value="size1">ft</option>
                <option value="size2">inch</option>
              </select>
            </div>
            
            
            </div>
            <div className="col-md-12 color" >
<div className="form-group">
<label>Choose Color</label><br/>
<select  name="color" id="color">
<option value=""></option>
<option value="green">GREEN</option>
<option value="red">RED</option>
<option value="white">White</option>
</select>
</div>
	</div>
            </div>
            </div>
            <div className="fixed_section">
<div className="container">
<div className="row">

<<<<<<< HEAD
{/*<div className="col-md-2"><button className="save-btn btn btn-info save">Save</button></div>*/}
<div className="col-md-4"><button className="save-btn btn btn-info create">Save Product</button></div>
{/*<div className="col-md-3"><button className="save-btn btn btn-info restore">Restore</button></div>*/}
<div className="col-md-4">
=======
<div className="col-md-2"><button className="save-btn btn btn-info save">Save</button></div>
<div className="col-md-2"><button className="save-btn btn btn-info create">Create</button></div>
<div className="col-md-3"><button className="save-btn btn btn-info restore">Restore</button></div>
<div className="col-md-2">
>>>>>>> 6b2ba52131787109ceb77db43a9a636415ba3e03
<input type="button" id="delete" className="save-btn btn btn-danger" value="Delete selection"/>
</div></div></div>            
            <div id="sku" className="popup">
              <input
                type="text"
                id="sku1"
                placeholder="Product SKU"
                className="form-control"
              />
              <br />
              <button className="save-btn btn btn-success save1">
                Save Canvas
              </button>
            </div>
            <div id="create_product" className="popup">
              <input
                type="text"
                id="pr_name"
                placeholder="Product Name"
                className="form-control"
              />
              <br />
              <input
                type="text"
                id="pr_sku"
                placeholder="Product SKU"
                className="form-control"
              />
              <br/>
              <input
                type="text" 
                pattern="[0-9]"
                id="pr_price"
                placeholder="Price"
                className="form-control" 
              />
              <br />
              <input
                type="hidden"
                id="pr_weight"
                 value="4"
                className="form-control" disabled
              />
              <br/>
              <input
                type="hidden"
                id="pr_type"
                 value="physical"
                className="form-control" disabled
              />
              
              
              <button className="save-btn btn btn-success create1">
                Create Product  
              </button>
            </div>
            <div id="sku2" className="popup">
              <input
                type="text"
                id="sku11"
                placeholder="Product SKU"
                className="form-control"
              />
              <br />
              <button className="save-btn btn btn-success restore1">
                Restore Canvas
              </button>
            </div>
            
          </div>
        </div>
      </div>
      <div className="overlay"></div>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
    </>
  )
}

export default Home
