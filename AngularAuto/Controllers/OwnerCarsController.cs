using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AngularAuto.Models;
using AngularAuto.ViewModels;
using Microsoft.EntityFrameworkCore;


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


        [HttpPut("UpdateCars/{id}")]
        public IActionResult UpdateCars(int id, [FromBody]ICollection<CarViewModel> carsview)
        {
            if (carsview != null)
            {
                var ownercar = db.OwnerCars.Single(ow => ow.Id == id);
                //var cars = db.OwnerCars
                //.Include(owc => owc.Cars)
                //.ToList();
                //var cars = db.Cars.Where(c => c.OwnerCarId == null);
                var cars = db.Cars;

                foreach (CarViewModel carview in carsview)
                {
                    Car car = cars.Single(c => c.Id == carview.Id);
                    if (car != null)
                    {
                        car.ownercar_id = carview.ownercar_id;
                        db.Update(car);
                    }
                }
                if (ModelState.IsValid)
                {
                    db.SaveChanges();
                    return Ok();
                }
                return BadRequest(ModelState);
            }
            else
                return Ok();
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