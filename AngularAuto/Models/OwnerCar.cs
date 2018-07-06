using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuto.Models
{
    public class OwnerCar
    {

        public OwnerCar()
        {
            this.Cars = new List<Car>();
        }


        [Key]
        public int Id { get; set; }
        [MaxLength(256)]
        [Required]
        public string Name { get; set; }
        public int Age { get; set; }

        public virtual ICollection<Car> Cars { get; set; }
    }
}

