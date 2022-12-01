

CREATE TABLE bicycle (
        bicycleId INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (bicycleId)
);
CREATE TABLE rack (
        rackId INT NOT NULL AUTO_INCREMENT,
    x      INT, -- x coordinate
    y      INT, -- y coordinate
        PRIMARY KEY (rackId)
);
CREATE TABLE slot (
        slotId INT NOT NULL AUTO_INCREMENT,
    bicycle INT, -- bicycle that it is currently being held
    rack INT NOT NULL, -- rack that it belongs to

    PRIMARY KEY (slotId),
    FOREIGN KEY (bicycle) REFERENCES bicycle(bicycleId),
    FOREIGN KEY (rack)    REFERENCES rack(rackId)
);
CREATE TABLE bicycleInfoLogs (
        logId INT NOT NULL AUTO_INCREMENT,
        bicycle INT NOT NULL,
    x INT,
    y INT,
    velocity FLOAT,
    acceleration FLOAT,
    ts TIMESTAMP,

    PRIMARY KEY (logId),
    FOREIGN KEY (bicycle) REFERENCES bicycle(bicycleId)
);

