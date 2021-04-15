// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

 class MyCard extends HTMLElement {
     constructor(){
            super()

       const description= this.getAttribute("description")   
           const giturl = this.getAttribute("giturl")
           const liveurl = this.getAttribute("liveurl")
           const image = this.getAttribute("image")

        //    console.log(image, giturl, liveurl, description)

           this.innerHTML = `
           <sl-card>

           <h1>${description}</h1>
           <img class="image" src=${image} slot="image">
           <sl-button-group>
           <a href=${giturl}><sl-button>Git</sl-button></a>
           <a href=${liveurl}><sl-button>Live</sl-button></a>

           </sl-button-group>
         `

           
     }
}

customElements.define("my-card", MyCard)


/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////




