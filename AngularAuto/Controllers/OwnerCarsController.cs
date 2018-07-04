using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AngularAuto.Models;
using AngularAuto.ViewModels;

namespace AngularAuto.Controllers
{
    [Produces("application/json")]
    [Route("api/OwnerCars")]
    public class OwnerCarsController : Controller
    {

        ApplicationContext db;
        public OwnerCarsController(ApplicationContext context)
        {
            db = context;
            if (!db.OwnerCars.Any())
            {
                db.OwnerCars.Add(new OwnerCar { Name = "Adney", Age = 24 });
                db.OwnerCars.Add(new OwnerCar { Name = "Hamilton", Age = 56 });
                db.OwnerCars.Add(new OwnerCar { Name = "Patrick", Age = 18 });
                db.OwnerCars.Add(new OwnerCar { Name = "Pieter", Age = 36 });
                db.SaveChanges();
            }
        }
        [HttpGet]
        public IEnumerable<OwnerCar> Get()
        {
            return db.OwnerCars.ToList();
        }

        [HttpGet("{id}")]
        public OwnerCar Get(int id)
        {
            OwnerCar ownercar = db.OwnerCars.FirstOrDefault(x => x.Id == id);
            return ownercar;
        }

        [HttpPost]
        public IActionResult Post([FromBody]OwnerCar ownercar)
        {
            if (ModelState.IsValid)
            {
                db.OwnerCars.Add(ownercar);
                db.SaveChanges();
                return Ok(ownercar);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]OwnerCar ownercar)
        {
            if (ModelState.IsValid)
            {
                db.Update(ownercar);
                db.SaveChanges();
                return Ok(ownercar);
            }
            return BadRequest(ModelState);
        }


        [HttpPut("UpdateCarsByOwner/{id}")]
        public IActionResult UpdateCarsByOwner(int id, [FromBody]ICollection<CarViewModel> Cars)
        {
            //if (ModelState.IsValid)
            //{
            //    db.Update(ownercar);
            //    db.SaveChanges();
                return Ok();
            //}
            //return BadRequest(ModelState);
        }





        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            OwnerCar ownercar = db.OwnerCars.FirstOrDefault(x => x.Id == id);
            if (ownercar != null)
            {
                db.OwnerCars.Remove(ownercar);
                db.SaveChanges();
            }
            return Ok(ownercar);
        }

    }
}