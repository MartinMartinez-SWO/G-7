using Microsoft.AspNetCore.Mvc;
using back.Models;
using back.config;
using Microsoft.EntityFrameworkCore;

namespace back.Controllers
{
    public class ClienteController : Controller
    {
        public readonly DBClienteContext _context;

        public ClienteController(DBClienteContext context)
        {
            _context = context;
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<Cliente>>> Get()
        {
            return await _context.Clientes.ToListAsync();
        }


        [HttpPost("save")]
        public async Task<ActionResult> Post([FromBody] Cliente cliente)
        {
            _context.Add(cliente);
            await _context.SaveChangesAsync();

            return Ok(cliente);
        }
    }
}
