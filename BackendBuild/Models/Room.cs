﻿
public class Room
{
    public Room()
    {
        Rows = new List<Row>();
    }
    public int Id { get; set; }
    public string Name { get; set; }
    public virtual List<Row> Rows { get; private set; }
    
    
}