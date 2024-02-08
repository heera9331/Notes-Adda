
/**
 * @heera9331
 * @desc - networking demonstration using socket server, creating client
 * @date - 10-12-2023
 */


package Java.networking;

import java.net.Socket;
import java.io.PrintWriter;

public class Client {
    public static void main(String[] args) {
        try {
            // Create a client socket
            Socket clientSocket = new Socket("localhost", 8080);

            // Send data to the server
            PrintWriter writer = new PrintWriter(clientSocket.getOutputStream(), true);
            writer.println("Hello from the client!");

            // Close the socket
            writer.close();
            clientSocket.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
