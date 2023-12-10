
/**
 * @heera9331
 * @desc - networking demonstration using socket server
 * @date - 10-12-2023
 */

package Java.networking;

import java.net.ServerSocket;
import java.net.Socket;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Server {
    public static void main(String[] args) {
        try {
            // Create a server socket
            ServerSocket serverSocket = new ServerSocket(8080);

            System.out.println("Server is listening on port 8080...");

            // Wait for client connection
            Socket clientSocket = serverSocket.accept();

            // Read data from the client
            BufferedReader reader = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            String clientMessage = reader.readLine();
            System.out.println("Received from client: " + clientMessage);

            // Close sockets
            reader.close();
            clientSocket.close();
            serverSocket.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
