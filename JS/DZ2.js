
const node_for_click_lname=document.getElementById('click_lname')
function find_edit_lname(){
    document.getElementsByTagName('div')[5].innerHTML="Lisitskaya"
}
node_for_click_lname.addEventListener("click",find_edit_lname)

const node_for_click_name = document.getElementById('click_name')
    function find_edit_name() {
    document.getElementsByTagName('div')[6].innerHTML="Veronika"

    }
node_for_click_name.addEventListener("click", find_edit_name)


