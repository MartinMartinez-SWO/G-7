
using Microsoft.EntityFrameworkCore;
using back.Models;

namespace back.config
{
    public class DBClienteContext : DbContext
    {

        public DBClienteContext(DbContextOptions<DBClienteContext> options) : base(options) { 

        }

        public DbSet<Cliente> clientes { get; set; }

    }
}
