using Microsoft.EntityFrameworkCore;

namespace AngularAuto.Models
{
    public class ApplicationContext : DbContext
    {

        //Add-Migration Initial
        //Update-Database

        //enable-migrations
        //Add-Migration "MigrateDB_версия"
        //Update-Database

        //Update-Database -Migration 0
        //Remove-Migration

        public DbSet<Car> Cars { get; set; }
        public DbSet<OwnerCar> OwnerCars { get; set; }


        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();

        }



        //public ApplicationContext()
        //{
        //    Database.EnsureCreated();
        //}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=parkingcarsdb;Trusted_Connection=True;");
        }
    }
}
