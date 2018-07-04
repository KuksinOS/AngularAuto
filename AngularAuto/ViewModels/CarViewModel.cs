using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuto.ViewModels
{
    public class CarViewModel
    {

        
        public int Id { get; set; }
       
        public string Name { get; set; }
        
        public string Body { get; set; }
       
        public string Engine { get; set; }
        
        public string PaintColor { get; set; }
       
        public string Wheels { get; set; }

        // [Key, ForeignKey("OwnerCar")]
        public int? OwnerCarId { get; set; }
        public int? ownercar_id { get; set; }


    }
}
