'use client'

import { useState, useEffect } from 'react'

export default function TestComponent() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date().toLocaleTimeString('ko-KR'))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('ko-KR'))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      alignItems: 'center'
    }}>
      <div style={{
        padding: '1.5rem',
        background: '#f5f5f5',
        borderRadius: '12px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#333' }}>카운터</h2>
        <div style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#667eea',
          marginBottom: '1rem'
        }}>
          {count}
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            onClick={() => setCount(count - 1)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            -1
          </button>
          <button
            onClick={() => setCount(0)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              background: '#6b7280',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            리셋
          </button>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              background: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            +1
          </button>
        </div>
      </div>

      <div style={{
        padding: '1.5rem',
        background: '#f5f5f5',
        borderRadius: '12px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#333' }}>실시간 시계</h2>
        <div style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#764ba2',
          fontFamily: 'monospace'
        }}>
          {time}
        </div>
      </div>

      <div style={{
        padding: '1rem',
        background: '#e0e7ff',
        borderRadius: '8px',
        width: '100%',
        textAlign: 'center',
        color: '#4c1d95',
        fontSize: '0.9rem'
      }}>
        ✅ React 컴포넌트가 정상적으로 작동하고 있습니다!
      </div>
    </div>
  )
}
