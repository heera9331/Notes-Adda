

// #include <iostream>
// using namespace std;

// class Super
// {
// public:
//     Super()
//     {
//         cout << "Super constructor called" << endl;
//     }

//     Super(int x)
//     {
//         cout << "Super x" << endl;
//     }
// };

// class Sub : public Super
// {
// public:
//     Sub()
//     {
//         cout << "Sub constructor called" << endl;
//     }

//     Sub(int x)
//     {
        
//     }
// };

// int main()
// {
//     Sub *s1 = new Sub(3);

//     return 0;
// }


// #include <iostream>
// using namespace std;

// class Outer {
//     public:
//     class Inner {
//         public:
//         void display() {
//             cout << "local inner class" << endl;
//         }
//     };
// };

// int main() {
//     Outer *outer = new Outer();
//     outer.Inner *inner = new 
//     return 0;
// }

// #include <QApplication>
// #include <QMainWindow>
// #include <QPushButton>
// #include <QMessageBox>

// class MainWindow : public QMainWindow {
//     Q_OBJECT

// public:
//     MainWindow(QWidget *parent = nullptr) : QMainWindow(parent) {
//         // Create a button
//         QPushButton *button = new QPushButton("Click me!", this);

//         // Connect the button's clicked signal to a custom slot
//         connect(button, &QPushButton::clicked, this, &MainWindow::showMessage);

//         // Set the button as the central widget
//         setCentralWidget(button);
//     }

// public slots:
//     // Custom slot to show a message box when the button is clicked
//     void showMessage() {
//         QMessageBox::information(this, "Hello", "Button clicked!");
//     }
// };

// int main(int argc, char *argv[]) {
//     // Create a Qt application
//     QApplication app(argc, argv);

//     // Create the main window
//     MainWindow mainWindow;
//     mainWindow.show();

//     // Run the application
//     return app.exec();
// }

// #include "main.moc"
