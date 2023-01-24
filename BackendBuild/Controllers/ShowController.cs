﻿
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

[ApiController]
[Route("api/[controller]")]
public class ShowController
{
    private readonly ITheaterDbContext _context;


    public ShowController(ITheaterDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    [Route("createshow")]
    public async Task<ActionResult<Show>> Create(Show show)
    {

        await _context.Shows.AddAsync(show);
        _context.SaveChanges();
        return show;
    }


    [HttpPost]
    [Route("addGroup")]
    public async Task<ActionResult<Show>> AddGroupById(int groupId, int showId)
    {
        Group group = await _context.Groups.FindAsync(groupId);
        Show show = await _context.Shows.FindAsync(showId);
        show.Groups.Add(group);
        _context.SaveChanges();
        return show;
    }

    [HttpPost]
    [Route("addGenre")]
    public async Task<ActionResult<Show>> AddGenre (int genreId, int showId)
    {
        Show show = await _context.Shows.FindAsync(showId);
        Genre genre = await _context.Genres.FindAsync(genreId);

        show.Genres.Add(genre);
        _context.SaveChanges();
        return show;
    }

    [HttpGet]
    [Route("getshow")]
    public async Task<ActionResult<Show>> getShow(int id)
    {
        return await _context.Shows.Include(s => s.Groups).Include(s => s.Genres).FirstOrDefaultAsync(s => s.Id == id);
    }

    [HttpGet]
    [Route("getShows")]
    public async Task<ActionResult<List<Show>>> getShows () 
    {
        return await _context.Shows.ToListAsync();
    }

    [HttpGet]
    [Route("getPerformances")]
    public async Task<ActionResult<List<Performance>>> getPerformancesById(int id)
    {
        return await _context.Performances.Where(p => p.Show.Id == id).ToListAsync();

    }



}

