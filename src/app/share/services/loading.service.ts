import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }


    // showloading():boolean {
    //   return true;
    // }

    // hideloading(): boolean {
    //     return false;
    // }
  
    private styleLoading() {
      var style = "<style>";
      var loadingService = [
        "z-index: 10",
        "position: absolute",
        "top:0",
        "left:0",
        "right:0",
        "bottom:0",
        "background-color: rgba(255, 255, 255, 0.5)",
        // "margin:-10px"
      ];
      var progressBar = [
        "background-color: rgba(0,0,0,0.1)",
        "top: 50%",
        "left: 49.2%",
        "transform: translate(-50%, -50%)",
        "position: absolute",
        "width: 200px",
        "height: 20px",
        "border-radius: 3px;"
      ];
      var loadingProgressBar = [
        "background-color: #6876c1",
        "height: 100%",
        "width: 0%",
        "border-radius: 3px",
        "transition: width 0.5s",
        "text-align: right",
        "color: #FFF"
      ];
      var spinner = [
        "transform: translate(-50%, -50%)",
        "font-size:30px",
        "position: absolute",
        "top:45%",
        "left:48%",
        "color: #35b3cc"
      ];
      style += "#loadingService {" + loadingService.join(";") + "}";
      style += "#loadingService .progressBar{" + progressBar.join(";") + "}";
      style += "#loadingService .fa-spinner{" + spinner.join(";") + "}";
      style += "#loadingService .loadingProgressBar{" + loadingProgressBar.join(";") + "}";
      style += "</style>";
      return style;
    }
  
    public showLoadingWithBorder(element, withProgressBar) {
      let elementObj = document.getElementById(element);
      elementObj.style.position = 'relative';
      var html = '<div id="loadingService">' + this.styleLoadingBorder();
      html += '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>';
      if (withProgressBar) {
        html += "<div class='progressBar'><div class='loadingProgressBar'></div></div>";
      }
      html += "</div>";
      // let  parser = new DOMParser();
      // let elemtnAdd = parser.parseFromString(html, "text/xml");
      elementObj.insertAdjacentHTML('beforeend', html);
    }
  
    private styleLoadingBorder() {
      var style = "<style>";
      var loadingService = [
        "z-index: 10",
        "position: absolute",
        "top:0",
        "left:0",
        "right:0",
        "bottom:0",
        "background-color: rgba(255, 255, 255, 1)",
        "border: 1px solid #dbdde2",
        "border-radius: 5px",
        "text-align: center"
      ];
      var progressBar = [
        "background-color: rgba(0,0,0,0.1)",
        "top: 48%",
        "left: 49.2%",
        "position: relative",
        "top: calc(50% - 15px)",
        "width: 200px",
        "height: 20px",
        "border-radius: 3px;"
      ];
      var loadingProgressBar = [
        "background-color: #6876c1",
        "height: 100%",
        "width: 0%",
        "border-radius: 3px",
        "transition: width 0.5s",
        "text-align: right",
        "color: #FFF"
      ];
      var spinner = [
        "position: relative",
        "top: calc(50% - 15px)",
        "font-size:30px",
        "color: #35b3cc"
      ];
      style += "#loadingService {" + loadingService.join(";") + "}";
      style += "#loadingService .progressBar{" + progressBar.join(";") + "}";
      style += "#loadingService .fa-spinner{" + spinner.join(";") + "}";
      style += "#loadingService .loadingProgressBar{" + loadingProgressBar.join(";") + "}";
      style += "</style>";
      return style;
    }
  
  
    public showLoadingAllScreen(){
      let elementObj = document.getElementById("loading");
      //let elementObj = document.getElementsByTagName("body");
         var html = '<div id="loadingService">';
        var html = '<div>'
          //html += '<mat-spinner></mat-spinner>';
         html += '<i class="fa fa-spinner fa-spin" aria-hidden="true" style = "font-size:80px"></i>';
         html += "</div>";
        // elementObj[0].insertAdjacentHTML('beforeend', html);
        elementObj.innerHTML= html;
       //elementObj.appendChild(html)
    }
  
    // public hideLoadingAllScreen(){
    //   let elementObj = document.getElementsByTagName("body");
    //   //let elementObj = document.getElementById("loading");
    //   if (elementObj) {
    //     let listChild: HTMLCollection = elementObj.children;
    //     for (let i = 0; i < listChild.length; i++) {
    //       let tempElement = listChild[i];
    //       if (tempElement.id == "loadingService") {
    //         tempElement.parentNode.removeChild(tempElement)
    //       }
    //     }
    //   }
    // }

	public hideLoadingAllScreen(){
		let elementObj = document.getElementsByTagName("body");
		if (elementObj[0]) {
			let listChild: HTMLCollection = elementObj[0].children;
			for (let i = 0; i < listChild.length; i++) {
				let tempElement = listChild[i];
				if (tempElement.id == "loadingService") {
					tempElement.parentNode.removeChild(tempElement)
				}
			}
		}
	}
    
}
