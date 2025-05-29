import React from 'react'
import './styling/Aboutus.css'
const Aboutus = () => {
  return (
    <div class="mycontainer2" style={{background: 'linear-gradient(135deg, #f5f7fa 0%, #ffeef8 100%)'}}>
      <div class="aboutUsContainer card shadow" style={{
        borderRadius: '20px',
        overflow: 'hidden',
        border: 'none',
        background: 'white'
      }}>
        <section class="heroSection" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '3rem',
          background: 'linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%)',
          color: 'white'
        }}>
          <div class="heroContent" style={{flex: 1, paddingRight: '2rem'}}>
            <h1 class="heading" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '1.5rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>Delivering Deliciousness, Right to Your Door</h1>
            <p class="para" style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              opacity: '0.9'
            }}>We're passionate about connecting you with the best local restaurants and delivering your favorite meals quickly and conveniently.</p>
          </div>
          <div class="heroImage" style={{flex: 1}}>
            <img 
              src="/images/company.png" 
              alt="Delicious Food Delivery" 
              style={{
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
        </section>
  
        <section class="ourStorySection" style={{
          padding: '3rem',
          background: 'white'
        }}>
          <h2 class="heading" style={{
            color: '#ff6b6b',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            position: 'relative',
            display: 'inline-block'
          }}>
            <span style={{
              position: 'absolute',
              bottom: '-5px',
              left: '0',
              width: '50px',
              height: '4px',
              background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
              borderRadius: '2px'
            }}></span>
            Our Story
          </h2>
          <p class="para" style={{
            color: '#555',
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            Founded in [2025], [Leeiyorn's Quick Meals] was born out of a simple idea: to make enjoying great food easier than ever. We saw a need for a reliable and efficient food delivery service that not only offered a wide variety of cuisines but also prioritized speed and customer satisfaction.
          </p>
          <p class="para" style={{
            color: '#555',
            lineHeight: '1.8'
          }}>
            What started as a small local operation has grown into a thriving platform connecting hungry customers with their favorite restaurants across [Your City/Region]. Our commitment to quality, seamless ordering, and timely delivery remains at the heart of everything we do.
          </p>
        </section>
  
        <section class="ourMissionSection" style={{
          padding: '3rem',
          background: 'linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%)',
          color: '#333'
        }}>
          <h2 class="heading" style={{
            fontSize: '2rem',
            marginBottom: '1.5rem',
            color: '#2c3e50'
          }}>Our Mission</h2>
          <p class="para" style={{
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            Our mission is to be the leading food delivery platform that empowers local restaurants and provides customers with a delightful and hassle-free dining experience at home, in the office, or wherever they may be. We strive to:
          </p>
          <ul class="list2" style={{
            listStyleType: 'none',
            paddingLeft: '0'
          }}>
            <li style={{
              padding: '0.5rem 0',
              paddingLeft: '1.5rem',
              position: 'relative',
              marginBottom: '0.5rem'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0.8rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#e74c3c'
              }}></span>
              Offer a diverse selection of high-quality food options.
            </li>
            <li style={{
              padding: '0.5rem 0',
              paddingLeft: '1.5rem',
              position: 'relative',
              marginBottom: '0.5rem'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0.8rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#3498db'
              }}></span>
              Provide a user-friendly and intuitive ordering process.
            </li>
            <li style={{
              padding: '0.5rem 0',
              paddingLeft: '1.5rem',
              position: 'relative',
              marginBottom: '0.5rem'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0.8rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#2ecc71'
              }}></span>
              Ensure fast and reliable delivery services.
            </li>
            <li style={{
              padding: '0.5rem 0',
              paddingLeft: '1.5rem',
              position: 'relative',
              marginBottom: '0.5rem'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0.8rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#f39c12'
              }}></span>
              Support local restaurants and their growth.
            </li>
            <li style={{
              padding: '0.5rem 0',
              paddingLeft: '1.5rem',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '0.8rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#9b59b6'
              }}></span>
              Prioritize customer satisfaction above all else.
            </li>
          </ul>
        </section>
  
        <section class="ourTeamSection" style={{
          padding: '3rem',
          background: 'white'
        }}>
          <h2 class="heading" style={{
            color: '#ff6b6b',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>Meet the Team</h2>
          <p class="text-black" style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            color: '#666',
            lineHeight: '1.7'
          }}>
            Behind [leeiyorn's Quick Meals] is a dedicated team of food enthusiasts, tech innovators, and logistics experts who are passionate about making your food delivery experience exceptional.
          </p>
          <div class="teamMembers" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            <div class="teamMember" style={{
              background: '#fff',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
              width: '250px',
              ':hover': {
                transform: 'translateY(-10px)'
              }
            }}>
              <img 
                src="/images/lee.jpeg" 
                alt="Team Member 1" 
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '5px solid #ff9a9e',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '0.5rem'
              }}>[Mark Leeiyorn]</h3>
              <p style={{
                color: '#7f8c8d',
                fontWeight: '500'
              }}>Co-founder & CEO</p>
            </div>
            <div class="teamMember" style={{
              background: '#fff',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
              width: '250px',
              ':hover': {
                transform: 'translateY(-10px)'
              }
            }}>
              <img 
                src="/images/ksi.jpeg" 
                alt="Team Member 2" 
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '5px solid #a1c4fd',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '0.5rem'
              }}>[ Samuel Kuria]</h3>
              <p style={{
                color: '#7f8c8d',
                fontWeight: '500'
              }}>Head of Operations</p>
            </div>
            <div class="teamMember" style={{
              background: '#fff',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
              width: '250px',
              ':hover': {
                transform: 'translateY(-10px)'
              }
            }}>
              <img 
                src="/images/ns.jpeg" 
                alt="Team Member 2" 
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '5px solid #c2e9fb',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '0.5rem'
              }}>[ Nesh Munene]</h3>
              <p style={{
                color: '#7f8c8d',
                fontWeight: '500'
              }}>Head of Sells</p>
            </div>
          </div>
        </section>

        <section class="contactUsSection" style={{
          padding: '3rem',
          background: 'linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)',
          textAlign: 'center',
          color: '#2c3e50'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1.5rem'
          }}>Get in Touch</h2>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem'
          }}>
            Have questions or feedback? We'd love to hear from you!
          </p>
          <p style={{
            marginBottom: '0.5rem',
            fontWeight: '500'
          }}>
            Email: <a href="leornemuchui@gmail.com" style={{
              color: '#e74c3c',
              textDecoration: 'none',
              fontWeight: '600'
            }}>support@[leornemuchui@gmail.com].com</a>
          </p>
          <p style={{
            fontWeight: '500'
          }}>
            Phone: <span style={{
              color: '#e74c3c',
              fontWeight: '600'
            }}>[+254 726512212]</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default Aboutus