import os
import sys
import csv
from models.Base import Base
from models.School import School
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy import create_engine

db_uri = os.environ.get('DB_URI')
engine = create_engine(db_uri)
Base.metadata.create_all(engine)

Session = sessionmaker()
Session.configure(bind=engine)

session = Session()

with open('../data/postscndryunivsrvy2013dirinfo.csv', 'r') as f:
    isHeadingLine = True
    for line in f:
        line = [l for l in csv.reader(line.splitlines(), quotechar='"', delimiter=',',
            quoting=csv.QUOTE_ALL, skipinitialspace=True)][0]
        if isHeadingLine:
            isHeadingLine = False
            counter = 0
            for i in line:
                print str(counter) + ":" + i
                counter+=1
            continue

        name = line[1]
        address = line[2]
        city = line[3]
        state = line[4]
        zipCode = line[5]
        website = line[15]
        latitude = float(line[-1].strip())
        longitude = float(line[-2])

        school = School(name=name, address=address, city=city, state=state, zipCode=zipCode, website=website, latitude=latitude, longitude=longitude)
        print school
        session.add(school)

session.commit()
session.close()
