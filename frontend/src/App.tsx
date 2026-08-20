import { useState } from 'react'
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Compass,
  Home,
  LayoutGrid,
  Menu,
  MessageCircle,
  Plus,
  Search,
  Settings,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

type IconType = typeof Home

type NavItem = { label: string; icon: IconType }

const navItems: NavItem[] = [
  { label: 'Overview', icon: Home },
  { label: 'Discover', icon: Compass },
  { label: 'My clubs', icon: Users },
  { label: 'Events', icon: CalendarDays },
  { label: 'Messages', icon: MessageCircle },
]

const events = [
  { day: '18', month: 'APR', title: 'Designing for impact', meta: 'Today · 5:30 PM', tag: 'Workshop', color: 'coral' },
  { day: '20', month: 'APR', title: 'Spring club fair', meta: 'Sun · 11:00 AM', tag: 'Campus-wide', color: 'teal' },
  { day: '24', month: 'APR', title: 'Women in STEM panel', meta: 'Thu · 7:00 PM', tag: 'Panel', color: 'gold' },
]

const clubCards = [
  { title: 'Product Builders', category: 'Innovation & tech', members: '284 members', initials: 'PB', color: 'plum' },
  { title: 'The Green Collective', category: 'Sustainability', members: '156 members', initials: 'GC', color: 'forest' },
  { title: 'Campus Radio', category: 'Arts & culture', members: '98 members', initials: 'CR', color: 'sunset' },
]

function App() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAllEvents, setShowAllEvents] = useState(false)
  const [joinedClubs, setJoinedClubs] = useState<string[]>([])

  const visibleEvents = showAllEvents ? events : events.slice(0, 2)

  function toggleClub(title: string) {
    setJoinedClubs((current) => current.includes(title) ? current.filter((club) => club !== title) : [...current, title])
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="brand"><span className="brand-mark"><Sparkles size={16} /></span><span>campus<span className="brand-accent">connect</span></span><button className="icon-button mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button></div>
        <div className="profile-switcher"><div className="avatar avatar-lime">AR</div><div><strong> student </strong><span>Student account</span></div><ChevronDown size={16} /></div>
        <nav className="primary-nav" aria-label="Main navigation">
          <span className="nav-label">Workspace</span>
          {navItems.map(({ label, icon: Icon }) => <button key={label} className={`nav-item ${activeNav === label ? 'active' : ''}`} onClick={() => { setActiveNav(label); setMenuOpen(false) }}><Icon size={18} /><span>{label}</span>{label === 'Messages' && <b className="nav-count">3</b>}</button>)}
        </nav>
        <div className="sidebar-bottom"><button className="nav-item"><Settings size={18} /><span>Settings</span></button><button className="nav-item"><CircleHelp size={18} /><span>Help center</span></button><div className="sidebar-note"><span className="status-dot" />All systems running</div></div>
      </aside>

      <main className="main-content">
        <header className="topbar"><button className="icon-button menu-trigger" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={21} /></button><div className="breadcrumb"><span>Workspace</span><span>/</span><strong>{activeNav}</strong></div><div className="topbar-actions"><label className="search-box"><Search size={17} /><input placeholder="Search campus" aria-label="Search campus" /></label><button className="icon-button notification" aria-label="Notifications"><Bell size={19} /><span /></button><div className="avatar avatar-coral avatar-small">AR</div></div></header>
        <div className="content-wrap">
          <section className="welcome-row"><div><p className="eyebrow">Friday, April 18, 2025</p><h1>Good morning,student <span className="wave">✦</span></h1><p className="subtitle">Here&apos;s what&apos;s happening around your campus today.</p></div><button className="primary-button"><Plus size={17} />Create something</button></section>

          <section className="hero-banner"><div className="hero-copy"><span className="hero-kicker">Your campus, in sync</span><h2>Find your people.<br /><em>Make your mark.</em></h2><p>Stay close to the clubs, events, and conversations that make campus feel like home.</p><button className="light-button" onClick={() => setActiveNav('Discover')}>Explore campus <ArrowUpRight size={16} /></button></div><div className="hero-art"><div className="sun-disc" /><div className="art-card art-card-one"><Users size={18} /><strong>12,480</strong><span>students connected</span></div><div className="art-card art-card-two"><div className="mini-avatars"><i>JT</i><i>MK</i><i>SL</i></div><span>your community is here</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div></section>

          <section className="section-block"><div className="section-heading"><div><span className="section-overline">Keep moving</span><h2>Quick actions</h2></div><button className="text-button">Customize <Settings size={14} /></button></div><div className="action-grid"><button className="action-card action-lime"><span className="action-icon"><Compass size={20} /></span><strong>Discover clubs</strong><small>Find your next thing</small><ArrowUpRight size={17} /></button><button className="action-card action-blue"><span className="action-icon"><CalendarDays size={20} /></span><strong>Browse events</strong><small>See what&apos;s on today</small><ArrowUpRight size={17} /></button><button className="action-card action-pink"><span className="action-icon"><BookOpen size={20} /></span><strong>Book a space</strong><small>Reserve a campus room</small><ArrowUpRight size={17} /></button></div></section>

          <div className="dashboard-grid"><section className="section-block events-section"><div className="section-heading"><div><span className="section-overline">Don&apos;t miss out</span><h2>Upcoming events</h2></div><button className="text-button" onClick={() => setShowAllEvents(!showAllEvents)}>{showAllEvents ? 'Show less' : 'View calendar'} <ArrowUpRight size={14} /></button></div><div className="event-list">{visibleEvents.map((event) => <article className="event-row" key={event.title}><div className={`date-tile ${event.color}`}><strong>{event.day}</strong><span>{event.month}</span></div><div className="event-info"><h3>{event.title}</h3><p><Clock3 size={14} />{event.meta}</p></div><span className="event-tag">{event.tag}</span><button className="round-arrow" aria-label={`Open ${event.title}`}><ArrowUpRight size={16} /></button></article>)}</div></section><aside className="spotlight"><div className="spotlight-top"><span className="section-overline">This week</span><span className="sparkle-badge"><Sparkles size={14} /></span></div><h2>Make room<br /><em>for curious.</em></h2><p>Curiosity is a club, a conversation, or a completely new direction.</p><div className="quote-line" /><span className="spotlight-foot">Campus prompt · 04</span></aside></div>

          <section className="section-block clubs-section"><div className="section-heading"><div><span className="section-overline">Worth a look</span><h2>Clubs you might like</h2></div><button className="text-button" onClick={() => setActiveNav('Discover')}>See all clubs <ArrowUpRight size={14} /></button></div><div className="club-grid">{clubCards.map((club) => { const joined = joinedClubs.includes(club.title); return <article className="club-card" key={club.title}><div className={`club-logo ${club.color}`}>{club.initials}</div><div className="club-card-copy"><h3>{club.title}</h3><p>{club.category}</p><span><Users size={13} />{club.members}</span></div><button className={`join-button ${joined ? 'joined' : ''}`} onClick={() => toggleClub(club.title)}>{joined ? <><Check size={14} />Joined</> : 'Join'}</button></article> })}</div></section>
        </div>
        <footer className="footer"><span>CampusConnect <b>·</b> Built for belonging</span><span>Need a hand? <strong>Visit help center</strong></span></footer>
      </main>
    </div>
  )
}

export default App
