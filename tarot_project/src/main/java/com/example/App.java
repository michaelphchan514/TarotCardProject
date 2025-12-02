package com.example;

import java.io.IOException;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.Parent;
    
public class App extends Application {

    private static Stage primaryStage;

    @Override
    public void start(Stage stage) throws IOException {
        primaryStage = stage;
        var loader = new FXMLLoader(getClass().getResource("main.fxml"));
        var scene = new Scene(loader.load());
        scene.getStylesheets().add(getClass().getResource("style.css").toExternalForm());

        stage.setScene(scene);
        stage.setTitle("MyApp");
        stage.show();
    }
    public static void setScene(String fxml) throws IOException{
        FXMLLoader fxmlLoader=new FXMLLoader(App.class.getResource(fxml));
        Parent root=fxmlLoader.load();
        Scene scene=primaryStage.getScene();
        if (scene==null){
            scene=new Scene(root);
            primaryStage.setScene(scene);
        }else{
            scene.setRoot(root);
        }
    }

}
