package com.example;

import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;

public class MainController {
    @FXML
    private void initialize() {

    }

    @FXML
    private void switchToSecondPage(ActionEvent event) {
        try {
           
            App.setScene("second.fxml");
        } catch (IOException e) {
            e.printStackTrace();
           
        }
    }
}
