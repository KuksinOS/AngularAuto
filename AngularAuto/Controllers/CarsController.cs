using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AngularAuto.Models;

namespace AngularAuto.Controllers
{
    [Produces("application/json")]
    [Route("api/Cars")]
    public class CarsController : Controller
    {

        ApplicationContext db;
        public CarsController(ApplicationContext context)
        {
            db = context;
            if (!db.Cars.Any())
            {
                db.Cars.Add(new Car { Name = "Golf", Body = "Hatchback", Engine = "Gasoline", PaintColor = "white", Wheels = "16 inch" });
                db.Cars.Add(new Car { Name = "Passat", Body = "Sedan", Engine = "Gasoline", PaintColor = "black", Wheels = "17 inch" });
                db.Cars.Add(new Car { Name = "Touareg", Body = "Big Crossower", Engine = "Diesel", PaintColor = "black", Wheels = "20 inch" });
                db.Cars.Add(new Car { Name = "Tiguan", Body = "Caravan", Engine = "Diesel", PaintColor = "red", Wheels = "14 inch" });
                db.SaveChanges();
            }
        }
        [HttpGet]
        public IEnumerable<Car> Get()
        {
            return db.Cars.ToList();
        }

        
        
        [HttpGet("CarsByOwner/{id}")]
        public IEnumerable<Car> CarsByOwner(int id)
        {
            return db.Cars.Where(cars => cars.OwnerCarId == id);
        }

        [HttpGet("CarsByNoOwner")]
        public IEnumerable<Car> CarsByNoOwner()
        {
            return db.Cars.Where(cars => cars.OwnerCarId == null);
        }


        [HttpGet("{id}")]
        public Car Get(int id)
        {
            Car car = db.Cars.FirstOrDefault(x => x.Id == id);
            return car;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Car car)
        {
            if (ModelState.IsValid)
            {
                db.Cars.Add(car);
                db.SaveChanges();
                return Ok(car);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Car car)
        {
            if (ModelState.IsValid)
            {
                db.Update(car);
                db.SaveChanges();
                return Ok(car);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Car car = db.Cars.FirstOrDefault(x => x.Id == id);
            if (car != null)
            {
                db.Cars.Remove(car);
                db.SaveChanges();
            }
            return Ok(car);
        }





    }
}
