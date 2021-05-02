import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.css']
})
export class ShowPeopleComponent implements OnInit {

  //constructor generates service object so the methods can be used
  constructor(private service:SharedService) { }

  //generates generic array to be used in the functions
  PeopleList:any=[];

  //generates generic models to be used in the functions
  ModalTitle:string;
  ActivateAddEditPeopleComp:boolean=false;
  personID:any;
  people:any;
  name:any;
  birthday:any;

  //generates empty filter strings
  PersonIDFilter:string="";
  NameFilter:string="";
  BirthdayFilter:string="";
  PeopleListWithoutFilter:any=[];

  //refreshes people list when the page is loaded
  ngOnInit(): void {
    this.refreshPeopleList();
  }

    //populates generic people object with empty data necessary to be passed on
    addClick(){
      this.people={
        PersonID:0,
        Name:"",
        Birthday:""
      }
      //sets the modal title to "Add Person" and turns on the Modal Window activator
      this.ModalTitle="Add Person";
      this.ActivateAddEditPeopleComp=true;
    }

    //sets the generic people item to the data passed to it, sets the Modal Window title, 
    //and turns on the Modal Window activator
    editClick(item){
      this.people=item;
      this.ModalTitle="Edit " + this.people.Name;
      this.ActivateAddEditPeopleComp=true;
   }

     //after confirmation, sends the PersonID to the deletePeople API method
    deleteClick(item){
      if(confirm('Are you sure you want to delete ' + item.Name + '?')){
        this.service.deletePeople(item.PersonID).subscribe(data=>{
          alert(data.toString());
          //refreshes people list with the remaining data
          this.refreshPeopleList();
        });
      }
    }

    //Turns off the modal window activators and refreshes the list
    closeClick(){
      this.ActivateAddEditPeopleComp=false;
      this.refreshPeopleList();
  }

    //sends a get request to the API through the method and retuns the list of people from that method
    refreshPeopleList(){
      this.service.getPeopleList().subscribe(data=>{
        this.PeopleList=data;
        this.PeopleListWithoutFilter=data;
      });
    }

      //populates the generic empty filter strings to data passed through
  FilterFn(){
    var PersonIDFilter = this.PersonIDFilter;
    var NameFilter = this.NameFilter;
    var BirthdayFilter = this.BirthdayFilter;

    //returns data that matches what is entered in the filter text boxes
    this.PeopleList = this.PeopleListWithoutFilter.filter(function (el){
      return el.PersonID.toString().toLowerCase().includes(
        PersonIDFilter.toString().trim().toLowerCase()
      )&&
      el.Name.toString().toLowerCase().includes(
        NameFilter.toString().trim().toLowerCase()
      )&&
      el.Birthday.toString().toLowerCase().includes(
        BirthdayFilter.toString().trim().toLowerCase()
      )
    });
  }

  //sorts data in the table either ascending or decending
  sortResult(prop,asc){
    this.PeopleList = this.PeopleListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
