const event = {
    name:"Birthday Party",
    guestList: ['Kamran', 'Ali', "arslan"],
    printList(){
        console.log("List is "+ this.name)
        this.guestList.forEach((x) => {
            console.log(x + "attending "+ this.name)
        })
    }
}

event.printList()