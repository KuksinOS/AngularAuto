﻿// <auto-generated />
using System;
using AngularAuto.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AngularAuto.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AngularAuto.Models.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Body")
                        .IsRequired()
                        .HasMaxLength(20);

                    b.Property<string>("Engine")
                        .HasMaxLength(20);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(256);

                    b.Property<int?>("OwnerCarId");

                    b.Property<string>("PaintColor")
                        .HasMaxLength(10);

                    b.Property<string>("Wheels")
                        .HasMaxLength(10);

                    b.Property<int?>("ownercar_id");

                    b.HasKey("Id");

                    b.HasIndex("OwnerCarId");

                    b.ToTable("Cars");
                });

            modelBuilder.Entity("AngularAuto.Models.OwnerCar", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Age");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.ToTable("OwnerCars");
                });

            modelBuilder.Entity("AngularAuto.Models.Car", b =>
                {
                    b.HasOne("AngularAuto.Models.OwnerCar", "OwnerCar")
                        .WithMany("Cars")
                        .HasForeignKey("OwnerCarId");
                });
#pragma warning restore 612, 618
        }
    }
}
