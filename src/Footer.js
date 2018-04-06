import React from "react";


class Footer extends React.Component{
    constructor(){
      super();
     
    }
    
   
   render(){
      
    
    return (
    <footer class="page-footer font-small indigo pt-0">
            
        <div class="container">
        
        <div class="row">
           
            <div class="col-md-12 py-5">
                <div class="mb-5 aligncenter">
                  
                    <a class="fb-ic">
                        <i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                    </a>
                   
                    <a class="tw-ic">
                        <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                    </a>
                  
                    <a class="gplus-ic">
                        <i class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                    </a>
                   
                    <a class="li-ic">
                        <i class="fab fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                    </a>
                   
                    <a class="ins-ic">
                        <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                    </a>
                    
                    <a class="pin-ic">
                        <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                    </a>
                </div>
            </div>
            
        </div>
        
    </div>
    
    <div class="footer-copyright py-3 text-center">
        © 2018 Copyright
    </div>
</footer>  
    )
   }
   }
   

   export default Footer