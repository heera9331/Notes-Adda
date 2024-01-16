import tkinter as tk
 
class App:
    def __init__(self, appName="") -> None:    
        self.root = tk.Tk()
        self.root.title(appName)
        self.root.geometry('720x480')  # 3:2 screen ratio
        self.user = {"username": "", "password": ""}
        
    def run(self):
        self.root.mainloop()

    def addLabel(self, text: str, row: int, col: int):
        label = tk.Label(self.root, text=text)
        label.grid(row=row, column=col)
    
    def handleChange(self):
        val = self.get_entry_text()
        print(val)

    def addEntry(self, row, col):
        
        entry = tk.Entry(self.root)
        entry.grid(row=row, column=col)

    def addButton(self, text, row, col):
        value = tk.IntVar(self.root)
        def fn():
            print(value.get())
            value.set(value.get()+1)
            print(self.user)

        btn = tk.Button(self.root, text=text, command=fn)
        btn.grid(row=row, column=col)

    def get_entry_text(self):
        value = self.root.children['!entry'].get()
        return value
    
if __name__ == '__main__':
    
    app = App("My Tkinter App")
    app.addLabel("First Name", 1, 1)
    app.addEntry(1,2)
    app.addLabel("Last Name", 2, 1)
    app.addEntry(2,2)
    app.addButton("Increment", 3, 2) 
    app.run()
