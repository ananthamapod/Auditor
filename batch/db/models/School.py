from sqlalchemy import Column, ForeignKey, Integer, String, Numeric
from Base import Base

class School(Base):
    __tablename__ = 'school'
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    address = Column(String(200), nullable=False)
    city = Column(String(50), nullable=False)
    state = Column(String(3), nullable=False)
    zipCode = Column(String(20), nullable=False)
    website = Column(String(100), nullable=False)
    latitude = Column(Numeric(14, 10))
    longitude = Column(Numeric(14, 10))

    def __repr__(self):
        return "<School(name='%s', address='%s', city='%s', state='%s', zipCode='%s', website='%s', latitude='%s', longitude='%s')>" % (
            self.name, self.address, self.city, self.state, self.zipCode, self.website, self.latitude, self.longitude)
