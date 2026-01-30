import TestComponent from './components/TestComponent'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #0f766e 0%, #f59e0b 50%, #dc2626 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        background: '#1e293b',
        borderRadius: '24px',
        padding: '3rem',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        maxWidth: '600px',
        width: '100%',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #f59e0b, #ef4444)',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          padding: '0.35rem 0.75rem',
          borderRadius: '9999px',
          marginBottom: '1rem',
          letterSpacing: '0.05em'
        }}>
          ✨ v2 — UI 업데이트
        </div>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '0.5rem',
          color: '#f8fafc',
          textAlign: 'center'
        }}>
          🚀 Vercel 배포 테스트
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#94a3b8',
          marginBottom: '2rem',
          fontSize: '1.1rem'
        }}>
          성공적으로 배포되었습니다!
        </p>
        <TestComponent />
      </div>
    </main>
  )
}
