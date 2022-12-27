using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ShowManager.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RoomController : Controller
{
    private readonly RoomContext _context;
    public RoomController(RoomContext context)
    {
        _context = context;
    }
    
    // GET api/theater
    [HttpGet]
    public IActionResult Get()
    {
        var rooms = _context.Rooms
            .Include(r => r.Rows)
            .ThenInclude(row => row.Seats)
            .ToList();
        return Ok(rooms);
    }
    
    // GET api/theater/5
    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        var room = _context.Rooms
            .Include(r => r.Rows)
            .ThenInclude(row => row.Seats)
            .SingleOrDefault(r => r.Id == id);
        if (room == null)
        {
            return NotFound();
        }
        return Ok(room);
    }

    // POST 
    [HttpPost]
    [Route ("createRoom")]
    public IActionResult Post([FromBody]Room room)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        _context.Rooms.Add(room);
        _context.SaveChanges();
        return CreatedAtAction("Get", new { id = room.Id }, room);
    }

    // PUT api/theater/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] Room room)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        if (id != room.Id)
        {
            return BadRequest();
        }

        _context.Entry(room).State = EntityState.Modified;
        _context.SaveChanges();
        return BadRequest();

    }
}