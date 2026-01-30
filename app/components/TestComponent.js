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
        background: 'linear-gradient(180deg, #334155 0%, #1e293b 100%)',
        borderRadius: '16px',
        width: '100%',
        textAlign: 'center',
        border: '1px solid rgba(248, 250, 252, 0.08)'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#f8fafc' }}>카운터</h2>
        <div style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#f59e0b',
          marginBottom: '1rem',
          textShadow: '0 0 20px rgba(245, 158, 11, 0.3)'
        }}>
          {count}
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setCount(count - 1)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              background: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)'
            }}
            onMouseOver={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)'; }}
            onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 4px 14px rgba(220, 38, 38, 0.4)'; }}
          >
            −1
          </button>
          <button
            onClick={() => setCount(0)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              background: '#475569',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
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
              background: '#0d9488',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)'
            }}
            onMouseOver={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 6px 20px rgba(13, 148, 136, 0.5)'; }}
            onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 4px 14px rgba(13, 148, 136, 0.4)'; }}
          >
            +1
          </button>
        </div>
      </div>

      <div style={{
        padding: '1.5rem',
        background: 'linear-gradient(180deg, #334155 0%, #1e293b 100%)',
        borderRadius: '16px',
        width: '100%',
        textAlign: 'center',
        border: '1px solid rgba(248, 250, 252, 0.08)'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#f8fafc' }}>실시간 시계</h2>
        <div style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#22d3ee',
          fontFamily: 'monospace',
          letterSpacing: '0.05em'
        }}>
          {time}
        </div>
      </div>

      <div style={{
        padding: '1rem 1.25rem',
        background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.2), rgba(34, 211, 238, 0.2))',
        borderRadius: '12px',
        width: '100%',
        textAlign: 'center',
        color: '#f8fafc',
        fontSize: '0.9rem',
        border: '1px solid rgba(248, 250, 252, 0.1)'
      }}>
        ✅ UI v2 — 다크 테마로 업데이트되었습니다!
      </div>
    </div>
  )
}
