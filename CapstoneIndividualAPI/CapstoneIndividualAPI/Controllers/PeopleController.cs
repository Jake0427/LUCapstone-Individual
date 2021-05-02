using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using CapstoneIndividualAPI.Models;

namespace CapstoneIndividualAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : Controller
    {
        private readonly IConfiguration _configuration;

        public PeopleController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //Creates get method to send to database
        [HttpGet]
        public JsonResult Get()
        {
            //query that gets sent to the database
            string query = @"
                   select PersonID, Name, convert(varchar(10),Birthday,120) as Birthday
                   from People";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LUCapstoneIndividualDB");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                //opens a connection to the database and runs the query
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            //returns a JSON table of the query results
            return new JsonResult(table);
        }

        //Creates post method to send to database
        [HttpPost]
        public JsonResult Post(People p)
        {
            //query that gets sent to the database
            string query = @"
                       insert into People values
                       (
                       '" + p.Name + @"'
                       ,'" + p.Birthday + @"'
                       )
                       ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LUCapstoneIndividualDB");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                //opens a connection to the database and runs the query
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            //returns a JSON table of the query results
            return new JsonResult("Added Successfully");
        }

        //Creates put method to send to database
        [HttpPut]
        public JsonResult Put(People p)
        {
            //query that gets sent to the database
            string query = @"
                       update People set
                       Name='" + p.Name + @"'
                       ,Birthday='" + p.Birthday + @"'
                       where PersonID=" + p.PersonID + @"
                       ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LUCapstoneIndividualDB");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                //opens a connection to the database and runs the query
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            //returns a JSON table of the query results
            return new JsonResult("Updated Successfully");
        }

        //Creates delete method to send to database
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            //query that gets sent to the database
            string query = @"
                       delete from People
                       where PersonID=" + id + @"
                       ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LUCapstoneIndividualDB");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                //opens a connection to the database and runs the query
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            //returns a JSON table of the query results
            return new JsonResult("Deleted Successfully");
        }
    }
}
