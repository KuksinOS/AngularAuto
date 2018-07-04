using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuto.Models
{
    public class Car
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(256)]
        [Required]
        public string Name { get; set; }
        [MaxLength(20)]
        [Required]
        public string Body { get; set; }
        [MaxLength(20)]
        public string Engine { get; set; }
        [MaxLength(10)]
        public string PaintColor { get; set; }
        [MaxLength(10)]
        public string Wheels { get; set; }

       // [Key, ForeignKey("OwnerCar")]
        public int? OwnerCarId { get; set; }
        public virtual OwnerCar OwnerCar { get; set; }
}
}
