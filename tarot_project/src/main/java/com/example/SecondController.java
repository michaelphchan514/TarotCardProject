package com.example;

import javafx.fxml.FXML;
import javafx.scene.web.WebView;
import javafx.scene.web.WebEngine;



public class SecondController {
     @FXML
    private WebView webView;
    
    @FXML
    private void initialize() {
        WebEngine webEngine = webView.getEngine();
        
        // Load the HTML file from resources
        String htmlPath = getClass().getResource("animation.html").toExternalForm();
        webEngine.load(htmlPath);
    }


}
